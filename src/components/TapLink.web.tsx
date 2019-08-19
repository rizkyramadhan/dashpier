import React from 'react';
import { observer, useObservable } from 'mobx-react-lite';
import { TouchableOpacity } from 'react-native';
const noop = () => {};

export default observer((p: any) => {
  const meta = useObservable({
    tap: false,
    startedWithTap: false,
    click: false
  });
  return (
    <div
      onTouchEnd={() => {
        if (meta.tap && p.onPress) {
          p.onPress();
          window.scrollTo({top:0});
        }
        meta.tap = false;
        meta.startedWithTap = true;
      }}
      onTouchMove={() => {
        meta.tap = false;
      }}
      onTouchStart={() => {
        meta.tap = true;
        meta.startedWithTap = true;
      }}
      onMouseDown={() => {
        meta.click = true;
      }}
      onMouseUp={() => {
        if (meta.click && !meta.startedWithTap && p.onPress) {
          p.onPress();
          window.scrollTo({top:0});
        }
        meta.click = false;
        meta.startedWithTap = false;
      }}
    >
      <TouchableOpacity {...p} onPress={noop} />
    </div>
  );
});
