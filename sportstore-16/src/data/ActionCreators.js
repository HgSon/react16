import {ActionTypes, DataTypes} from "./Types";
import {RestDataSources} from "./RestDataSources";

const dataSource = new RestDataSources();

export const loadData = (dataType, params) => ({
	type: ActionTypes.DATA_LOAD,
	payload: dataSource.GetData(dataType, params)
		.then(response => ({
			dataType,
			data: response.data,
			total: Number(response.headers["x-total-count"]),
			params
		}))
});

export const setPagesize = (newSize) => ({
	type: ActionTypes.DATA_SET_PAGESIZE,
	payload: newSize
})

export const setSortProperty = (newProp) => ({
	type: ActionTypes.DATA_SET_SORT_PROPERTY,
	payload: newProp
});

export const placeOrder = (order) => ({
	type: ActionTypes.DATA_STORE,
	payload: dataSource.StoreData(DataTypes.ORDERS, order).then(response => ({
			dataType: DataTypes.ORDERS,
			data: response.data
		}))
})