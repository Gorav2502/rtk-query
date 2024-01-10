import ApiSlice from "./Apislice";

const  postApi = ApiSlice.injectEndpoints({
    endpoints :(builder) =>({
        getAllPosts: builder.query({
            query: () => ({
                url:'/posts',
                method:'GET'
            })
    }),
}),
})

export const {useGetAllPostsQuery}= postApi