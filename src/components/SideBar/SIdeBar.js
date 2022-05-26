// import React from 'react'
// import './Sidebar.css'
// import SidebarOption from './SidebarOption'

// import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

// import { getTokenFromUrl } from '../spotify'
// import { useDataLayerValue } from '../DataLayer'

// function Sidebar() {
//     const [{ playlists }, dispatch] = useDataLayerValue();
//     // console.log('⏯️ :',playlists)
//     return (
//         <div className='sidebar'>
//             <img className="sidebar-logo"
//                 src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
//                 alt="" />

//             <SidebarOption option='Home' Icon={HomeIcon} />
//             <SidebarOption option='Search' Icon={SearchIcon} />
//             <SidebarOption option='Your Library' Icon={LibraryMusicIcon} />
//             <br />
//             <strong className='sidebar-title' >PLAYLISTS</strong>
//             <hr />
//             {playlists?.items?.map((x) => (
//                 <SidebarOption option={x.name} key={x.id} />
//             ))}
//         </div>
//     )
// }

// export default Sidebar

