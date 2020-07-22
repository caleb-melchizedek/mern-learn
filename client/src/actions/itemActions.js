import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM,ITEMS_LOADING} from './types';

axios.defaults.baseURL = 'http://localhost:5000';

export const getItems = () => dispatch =>{
		dispatch(setItemsLoading());
		axios.get('/api/items')
		.then((res) =>{
			dispatch({
				type:GET_ITEMS,
				payload:res.data
			})
		})
		.catch((err)=>console.log(err));

	// return{
	// 	type:GET_ITEMS
	// };
};

export const deleteItem = (id)=>{
	return{
		type:DELETE_ITEM,
		payload: id
	};
};


export const addItem = (item)=> dispatch =>{
	axios.post('/api/items',item)
	.then( (res) =>{
		dispatch({
			type:ADD_ITEM,
			payload: res.data 
		})	
	})
	
	// return{
	// 	type:ADD_ITEM,
	// 	payload: item
	// };
};


export const setItemsLoading = ()=>{
	return{
		type:ITEMS_LOADING
	};
};
