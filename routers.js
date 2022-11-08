import SeeOffer from './components/SeeOffer.vue'
import ProFile from './components/ProFile.vue'
import OfferList from './components/OfferList.vue'
import UpdateProfile from './components/UpdateProfile.vue'
import DeleteAccount from './components/DeleteAccount.vue'
import DetailsVendor from './components/DetailsVendor.vue'
import MandatoryField from './components/MandatoryField.vue'
import uploadOffer from './components/uploadOffer.vue'
import AddBank from './components/AddBank.vue'
import DateTime from './components/DateTime.vue'
import SingalOffer from './components/SingalOffer.vue'
import ApproveBook from './components/ApproveBook.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes =[
    {
        name:'SeeOffer',
        component:SeeOffer,
        path:'/SeeOffer'
    },
    {
        name:'ProFile',
        component:ProFile,
        path:'/'
    },
    {
        name:'OfferList',
        component:OfferList,
        path:'/OfferList'
    },
    {
        name:'UpdateProfile',
        component:UpdateProfile,
        path:'/UpdateProfile'
    },
    {
        name:'DeleteAccount',
        component:DeleteAccount,
        path:'/DeleteAccount'
    },
    {
        name:'DetailsVendor',
        component:DetailsVendor,
        path:'/DetailsVendor'
    },
    {
        name:'MandatoryField',
        component:MandatoryField,
        path:'/MandatoryField'
    },
    {
        name:'UploadOffer',
        component:uploadOffer,
        path:'/UploadOffer'
    },
    {
        name:'AddBank',
        component:AddBank,
        path:'/AddBank'
    },
    {
        name:'DateTime',
        component:DateTime,
        path:'/DateTime'
    },
    {
        name:'SingalOffer',
        component:SingalOffer,
        path:'/SingalOffer'
    },
    {
        name:'ApproveBook',
        component:ApproveBook,
        path:'/ApproveBook'
    },

]
const router=createRouter({
    history:createWebHistory(),
    routes
}
)
export default router