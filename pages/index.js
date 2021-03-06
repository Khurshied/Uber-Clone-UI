import { useEffect,useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';
import {auth} from '../firebase';
import { onAuthStateChanged, signOut } from '@firebase/auth';

export default function Home() {


  const [user, setUser] = useState(null)
  const router = useRouter()

   useEffect(() => {
     
     return onAuthStateChanged (auth,user => {
       if(user){
         setUser({
           name:user.displayName,
           photo: user.photoURL
         })
       }
       else{
         setUser(null)
         router.push('/login')
       }
     })
   }, [])
  
  return (
    <Wrapper>
      <Map></Map>
      <ActionItems>
        <Header>
          <UberLogo
            src={'https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg'}
          />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoURL} onClick={() => signOut(auth)}
            />
          </Profile>
        </Header>
        <ActionButtons>
         
            <ActionButton>
              <ActionButtonImage src={'https://i.ibb.co/cyvcpfF/uberx.png'} />
              Ride
            </ActionButton>
       
          <ActionButton>
            <ActionButtonImage src={'https://i.ibb.co/n776JLm/bike.png'} />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage
              src={'https://i.ibb.co/5RjchBg/uberschedule.png'}
            />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex flex-col bg-white h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex items-center justify-end
`;

const Name = tw.div`
mr-4 text-sm
`;

const UserImage = tw.img`
h-16 rounded-full border border-gray-200 p-2 cursor-pointer
`;

const ActionButtons = tw.div`
flex justify-between items-center
    `;
const ActionButton = tw.div`
bg-gray-200 flex-1 m-1 h-32 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
    `;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 rounded-lg mt-8 flex items-center
    `;
