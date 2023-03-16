import ModalPopOne from "./component/ModalPopOne";
import {Routes,Route} from 'react-router-dom';
import ModalPopUp from './component/ModalPopUp';
import ModalPopUpThree from "./component/ModalPopUpThree";
import ModalPopUpTwo from "./component/ModalPopUpTwo";
import ModalPopUpFour from "./component/ModalPopUpFour";
import ModalPopUpFive from "./component/ModalPopUpFive";
import ModalPopUpLogOut from "./component/ModalPopUpLogOut";
import InviteNewMember from "./component/InviteNewMember";
import Feedback from "./component/Feedback";
import Subscription from "./component/Subscription";
import Newrelease from "./component/Newrelease";
import UnreadNotification from "./component/UnreadNotification";
import CreateTicket from './component/CreateTicket';
import LobyForm from "./component/Createticket/LobyForm";
import MainComponent from "./component/OwnProject/MainComponent";
import ManageUser from "./component/ManageUser";
import UploadFiles from "./component/UploadFiles";
import { useState } from "react";
//import 'flowbite-datepicker';
function App() {
  
  const[showModal,setShowModal]=useState(false);
  return (
    
    // <Check/>
    //<ModalPopUp/>
    //<ModalPopOne/>
   //<ModalPopUpTwo/>
    //<ModalPopUpThree/>
    //<ModalPopUpFour/>
    //<ModalPopUpFive/>
    //<ModalPopUpLogOut/>
    //<InviteNewMember/>
    <Feedback />
    //<Subscription/>
    //<Newrelease/>
    //<UnreadNotification/>
    //<CreateTicket/>
    //<LobyForm/>
    //<ManageUser/>
    //<UploadFiles/>
    //<MainComponent/>
    // <div>
    //   <Routes>
    //     <Route path="/LobyForm" element={<LobyForm/>}></Route>
    //   </Routes>
    // </div>


  );
}

export default App;
