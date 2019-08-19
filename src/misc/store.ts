import { observable, toJS } from 'mobx';
import api from './api';
import _ from 'lodash';

const store = observable({
  client: {
    ad_client_id: '',
    name: ''
  },
  org: '',
  orglist: [] as any[],
  list: {} as any,
  cash: {
    total: 0,
    list: [] as any[]
  },
  bank: {
    total: 0,
    list: [] as any[]
  },
  recv: {
    total: 0,
    list: [] as any
  },
  payb: {
    total: 0,
    list: [] as any
  },
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
    // client
    store.client = (await api.get('/client')).body[0];

    // org
    const org: string = store.org ? `?org=${store.org}` : ``;
    store.orglist = (await api.get('/org')).body;
    // coa
    await api.get('/refresh');
    store.list = (await api.get('/get' + org)).body;


    // cash n bank
    const cboh = (await api.get('/cboh-id')).body;

    // cash
    const cash = this.find(cboh[0].toString());
    store.cash.list = cash.childs;
    store.cash.total = cash.debet - cash.kredit;

    // cash
    const bank = this.find(cboh[1].toString());
    store.bank.list = bank.childs;
    store.bank.total = bank.debet - bank.kredit;

    // recv
    store.recv.list = (await api.get('/ar')).body;
    store.recv.total = _.sumBy(store.recv.list, (item: any) => {
      return item.sum * 1;
    });

    // payb
    store.payb.list = (await api.get('/ap')).body;
    store.payb.total = _.sumBy(store.payb.list, (item: any) => {
      return item.sum * 1;
    });
  }
};
