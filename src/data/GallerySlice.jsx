import {createSlice} from '@reduxjs/toolkit';

const GallerySlice = createSlice({
    name: 'gallery',
    initialState:{
        items: [
           {
            id:1,
            title:"Towels",
            src: "/assets/DSC06749.jpg",
            description:"Towels on a window sill.",
           },
            {
            id:2,
            title:"Green Way",
            src:"/assets/DSC08191.jpg",
            description:"Banana leaves on the driveway.",
           },
            {
            id:3,
            title:"Flower Pot",
            src:"/assets/DSC08200.jpg",
            description:"Flower Pot in the sun.",
           },
            {
            id:4,
            title:"Towels on Shelf",
            src:"/assets/DSC06789.jpg",
            description:"Towels on the shelf.",
           },
            {
            id:5,
            title:"Towels in Sun",
            src:"/assets/DSC06793.jpg",
            description:"Towels on a shelf in the sun.",
           },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    },
        //     {
        //     id:,
        //     title:,
        //     src:,
        //     description:,
        //    }
        ]
    },
    reducers: {
    }
})
export default GallerySlice.reducer;