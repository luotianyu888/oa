import Left from './../components/commonality/left'
import basicDictionaryManagement_new from './../components/customerManager/basicData/basicDictionaryManagement_new'
import basicDictionaryManagement from './../components/customerManager/basicData/basicDictionaryManagement'
import AM_PasswordMaintenance from './../components/customerManager/authorityManagement/AM_PasswordMaintenance'
import peopleManagement from './../components/customerManager/authorityManagement/peopleManagement'
import peopleManagement_post from './../components/customerManager/authorityManagement/peopleManagement_post'
import peopleManagement_section from './../components/customerManager/authorityManagement/peopleManagement_section'
import peopleManagement_add from './../components/customerManager/authorityManagement/peopleManagement_add'
import groupManagement from './../components/customerManager/authorityManagement/groupManagement'
import navigation from './../components/commonality/navigation'
import emailManagement from './../components/systemAdministrator/emailManagement/emailManagement'
import cd_plan from './../components/systemAdministrator/salesManagement/cd_plan'
import cdp_execute from './../components/systemAdministrator/salesManagement/cdp_execute'
import salesLeads_management from './../components/systemAdministrator/salesManagement/salesLeads_management'
import salesLeads_newConstruction from './../components/systemAdministrator/salesManagement/salesLeads_newConstruction'

import salesLeads_newConstruction_copy from './../components/systemAdministrator/salesManagement/salesLeads_newConstruction_copy'

import salesLeads_editConstruction from './../components/systemAdministrator/salesManagement/salesLeads_editConstruction'






import cdp_formulate from './../components/systemAdministrator/salesManagement/cdp_formulate'
import customerService_analyze from './../components/systemAdministrator/statisticalStatement/customerService_analyze'
import customerContributionAnalysis from './../components/systemAdministrator/statisticalStatement/customerContributionAnalysis'
import customerCompositionAnalysis from './../components/systemAdministrator/statisticalStatement/customerCompositionAnalysis'
import customerChurnAnalysis from './../components/systemAdministrator/statisticalStatement/customerChurnAnalysis'
//客户管理
import customerChurn_management from './../components/systemAdministrator/clientManagement/customerChurn_management'



import client_informationManagement from './../components/systemAdministrator/clientManagement/client_informationManagement'
import Client_informationManagement_edit from './../components/systemAdministrator/clientManagement/client_informationManagement_edit'
import cim_orderHistory from './../components/systemAdministrator/clientManagement/cim_orderHistory'
import cim_contacts_new from './../components/systemAdministrator/clientManagement/cim_contacts_new'
import cim_Linkman from './../components/systemAdministrator/clientManagement/cim_Linkman'
import cim_contacts_new_edit from './../components/systemAdministrator/clientManagement/cim_contacts_new_edit'
import cim_communicationRecord from './../components/systemAdministrator/clientManagement/cim_communicationRecord'
import cim_communicationRecord_new from './../components/systemAdministrator/clientManagement/cim_communicationRecord_new'
import cim_communicationRecord_edit from './../components/systemAdministrator/clientManagement/cim_communicationRecord_edit'
import cim_orderHistory_orderDetails from './../components/systemAdministrator/clientManagement/cim_orderHistory_orderDetails'
import cim_orderHistory_add from './../components/systemAdministrator/clientManagement/cim_orderHistory_add'
import customerChurn_m_deferLoss from './../components/systemAdministrator/clientManagement/customerChurn_m_deferLoss'
import customerChurn_m_ConfirmLoss from './../components/systemAdministrator/clientManagement/customerChurn_m_ConfirmLoss'




// 登录
import Login from './../components/login/login'
import lostPassWord from './../components/login/lostPassWord'
let routes = [
    {
      path: "/",
      component: Left,
      exact:true
    },
    {
      path: "/basicDictionaryManagement",
      component: basicDictionaryManagement,
      exact:''
    },
    {
      path: "/basicDictionaryManagement_new",
      component: basicDictionaryManagement_new,
      exact:''
    },
    {
      path:'/AM_PasswordMaintenance',
      component:AM_PasswordMaintenance
    },
    {
      path:'/peopleManagement',
      component:peopleManagement
    },
    {
      path:'/peopleManagement_post',
      component:peopleManagement_post
    },
    {
      path:'/peopleManagement_section',
      component:peopleManagement_section
    },
    {
      path:'/peopleManagement_add',
      component:peopleManagement_add
    },
    {
      path:'/navigation',
      component:navigation
    },
    {
      path:'/groupManagement',
      component:groupManagement
    },
    {
      path:'/emailManagement',
      component:emailManagement
    },
    {
      path:'/cd_plan',
      component:cd_plan
    },
    {
      path:'/cdp_execute',
      component:cdp_execute
    },
    {
      path:'/salesLeads_management',
      component:salesLeads_management
    },
    {
      path:'/salesLeads_newConstruction',
      component:salesLeads_newConstruction
    },
    {
      path:'/cdp_formulate',
      component:cdp_formulate
    },
    {
      path:'/customerService_analyze',
      component:customerService_analyze
    },
    {
      path:'/customerContributionAnalysis',
      component:customerContributionAnalysis
    },
    {
      path:'/customerCompositionAnalysis',
      component:customerCompositionAnalysis
    },
    {
      path:'/customerChurnAnalysis',
      component:customerChurnAnalysis
    },
 
  
    // login
    {
      path:'/login',
      component:Login
    },
    {
      path:'/lostPassWord',
      component:lostPassWord
    },

    {
      path:'/salesLeads_newConstruction_copy',
      component:salesLeads_newConstruction_copy
    },
   
    {
      path:'/salesLeads_editConstruction',
      component:salesLeads_editConstruction
    },

   
   


   //客户管理
   {
    path:'/customerChurn_management',
    component:customerChurn_management
  },

    {
      path:'/client_informationManagement',
      component:client_informationManagement
    },
   
    {
      path:'/client_informationManagement_edit',
      component: Client_informationManagement_edit
    },


    {
      path:'/cim_orderHistory',
      component: cim_orderHistory
    },

    {
      path:'/cim_contacts_new',
      component: cim_contacts_new
    },
    {
      path:'/cim_Linkman',
      component: cim_Linkman
    },
    {
      path:'/cim_contacts_new_edit',
      component: cim_contacts_new_edit
    },
    {
      path:'/cim_communicationRecord',
      component: cim_communicationRecord
    },
    {
      path:'/cim_communicationRecord_new',
      component: cim_communicationRecord_new
    },
    {
      path:'/cim_communicationRecord_edit',
      component: cim_communicationRecord_edit
    },
    
    {
      path:'/cim_orderHistory_orderDetails',
      component: cim_orderHistory_orderDetails
    },


    {
      path:'/cim_orderHistory_add',
      component: cim_orderHistory_add
    },

    {
      path:'/customerChurn_m_deferLoss',
      component: customerChurn_m_deferLoss
    },
    {
      path:'/customerChurn_m_ConfirmLoss',
      component: customerChurn_m_ConfirmLoss
    },
    


    
    
];

export default routes;
