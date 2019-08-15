import { observable, toJS } from 'mobx';
import api from './api';
import _ from 'lodash';

const store = observable({
  org: '',
  orglist: [] as any[],
  list: {} as any,
  cboh: 0,
  cbohList: [] as any[],
  recv: 275000000,
  payb: 82500000,
  income: {
    rev: {
      year: 2950000000,
      avgmth: 38400000
    },
    exp: {
      year: 1684000000,
      avgmth: 24500000
    }
  }
});
export default store;

export const actions = {
  find(id: string): any {
    const find = (id: string, coa: any): any => {
      if (coa[id]) {
        return coa[id];
      }

      for (let i in coa) {
        let c = coa[i].childs;
        if (coa[i].debet === undefined) {
          coa[i].id = i;
          coa[i].debet = 0;
          coa[i].kredit = 0;
          coa[i].count = 0;
        }
        if (Object.keys(c).length > 0) {
          for (let ic in c) {
            c[ic].parent = coa[i];
          }
        }

        let f = find(id, c);
        if (f) {
          return f;
        }
      }
      return false;
    };
    const found = find(id, toJS(store.list));
    if (found) {
      return JSON.parse(
        JSON.stringify(found, function(key, value) {
          if (key === 'parent') return value.id;
          return value;
        })
      );
    }
    return false;
  },
  async reload() {
    const org: string = store.org ? `?org=${store.org}` : ``;
    store.list = (await api.get('/get' + org)).body;
    store.orglist = (await api.get('/org')).body;
    store.cbohList = [this.find('30621'), this.find('30626')];
    store.cboh = _.sumBy(store.cbohList, 'debet') || 0;
  }
};
