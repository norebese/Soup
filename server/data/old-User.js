// import { auth, database } from '../config/firebase';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { ref, set } from "firebase/database";

// export const registerUser = async (User)=>{
//     const { 
//       companyId, 
//       companyTeam, 
//       companyPosition, 
//       userName, 
//       Gender, 
//       Birth, 
//       userId, 
//       userPwd 
//     } = User.body;

//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, userId, userPwd);
//         const user = userCredential.user;

//         // Realtime Database에 사용자 정보 저장
//         await set(ref(database, 'users/' + user.uid), {
//             companyId: companyId,
//             companyTeam: companyTeam,
//             companyPosition: companyPosition,
//             userName: userName,
//             Gender: Gender,
//             Birth: Birth,
//             email: userId
//         });

//         console.log('User registered successfully:', user);
//         return true
//     } catch (error) {
//         console.error('Error registering user:', error);
//         return false
//     }
// }

// export const CheckUserId = async (UserId)=>{
// 8
// }
