// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    // {
    //   title: 'Account Settings',
    //   icon: AccountCogOutline,
    //   path: '/account-settings'
    // },
    // {
    //   sectionTitle: 'Pages'
    // },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      icon: ManageSearchOutlinedIcon,
      title: 'Locate Fixture',
      path: '/tables'
    },

    {
      icon: FileDownloadOutlinedIcon,
      title: 'Fixture Check-in',
      path: '/check-in'
    },
    {
      icon: FileUploadOutlinedIcon,
      title: 'Fixture Check-out',
      path: '/check-out'
    }
  ]
}

export default navigation
