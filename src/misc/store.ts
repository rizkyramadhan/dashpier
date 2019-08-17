import { observable, toJS } from 'mobx';
import api from './api';
import _ from 'lodash';

const store = observable({
  org: '',
  orglist: [] as any[],
  list: {} as any,
  cboh: {
    total: 0,
    list: [] as any[]
  },
  recv: {
    total: 0,
    list: [] as any
  },
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
        JSON.stringify(found, function (key, value) {
          if (key === 'parent') return value.id;
          return value;
        })
      );
    }
    return false;
  },
  async reload() {
    const client_id = 30006;
    const cboh = [30621, 30626];

    const org: string = store.org ? `?org=${store.org}` : ``;
    await api.get('/refresh?cid=' + client_id)

    store.list = (await api.get('/get' + org)).body;
    store.orglist = (await api.get('/org')).body;
    store.cboh.list = [this.find('30621'), this.find('30626')];
    store.cboh.total =
      _.sumBy(store.cboh.list, (item: any) => {
        return item.debet - item.kredit;
      }) || 0;

    store.cboh.list = [this.find(cboh[0].toString()), this.find(cboh[1].toString())];
    store.cboh.total =
      _.sumBy(store.cboh.list, (item: any) => {
        return item.debet - item.kredit;
      }) || 0;
  }
};
