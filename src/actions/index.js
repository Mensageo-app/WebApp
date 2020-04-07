import category from "../apis/category";

export const fetchCategories = () => async dispatch => {
    const res = await category.get("/categories");
    dispatch({type: "FETCH_CATEGORIES", payload: res.data})
}
