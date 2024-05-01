// import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function SignUp() {
//   const [formData, setFormData] = useState({})
//   const [errorMessage, setErrorMessage] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value.trim()})
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if(!formData.username || !formData.email || !formData.password) {
//       return setErrorMessage('Please fill in all fields')
//     }
//     try {
//       setLoading(true)
//       setErrorMessage(null)
//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData),
//       })
//       const data = await res.json()
//       if(data.success===false){
//         return setErrorMessage(data.message)
//       }
//       setLoading(false)
//       if(res.ok){
//         navigate('/signin')
//       }
//     } catch (error) {
//       setErrorMessage(error.message)
//       setLoading(false)
//     }
//   } // Add this closing curly brace

//   return (
//     <div className='min-h-screen mt-20'>
//       <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
//         {/* left */}
//         <div className='flex-1'>
//           <Link to='/' className='font-bold dark:text-white text-4xl'>
//             <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//               oneCloud's
//             </span>
//             Blog
//           </Link>
//           <p className='text-sm mt-5'>
//             Welcome to OneCloud's Blog - your hub for engineering enthusiasts! Share your insights and experiences in the world of technology. Join our community and let's inspire each other! You can sign up with your email and password or with Google.
//           </p>
//         </div>
//         {/* right */}

//         <div className='flex-1'>
//           <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
//             <div>
//               <Label value='Your username' />
//               <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
//             </div>
//             <div>
//               <Label value='Your email' />
//               <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange}/>
//             </div>
//             <div>
//               <Label value='Your password' />
//               <TextInput type='password' placeholder='Password' id='password' onChange={handleChange}/>
//             </div>
//             <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
//               {
//                 loading ? (
//                   <>
//                   <Spinner size='sm'/>
//                   <span className='pl-3'>Signing up...</span>
//                   </>
//                 ):'Sign Up'
//               }
//             </Button>
//           </form>
//           <div className="flex gap-2 text-sm mt-5">
//             <span>Have an account?</span>
//             <Link to='/signin' className='text-blue-500'>
//               Sign In
//             </Link>
//           </div>
//           {
//             errorMessage && (
//               <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
//             )
//           }
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill in all fields');
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/signin');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              oneCloud's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            Welcome to OneCloud's Blog - your hub for engineering enthusiasts! Share your insights and experiences in the world of technology. Join our community and let's inspire each other! You can sign up with your email and password or with Google.
          </p>
        </div>
        {/* right */}

        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col'>
              <label className='text-sm' htmlFor='username'>Your username</label>
              <input className='px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500' type='text' placeholder='Username' id='username' onChange={handleChange} />
            </div>
            <div className='flex flex-col'>
              <label className='text-sm' htmlFor='email'>Your email</label>
              <input className='px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500' type='email' placeholder='name@company.com' id='email' onChange={handleChange} />
            </div>
            <div className='flex flex-col'>
              <label className='text-sm' htmlFor='password'>Your password</label>
              <input className='px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500' type='password' placeholder='Password' id='password' onChange={handleChange} />
            </div>
            <button className='px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-bold hover:bg-purple-600' type='submit' disabled={loading}>
              {
                loading ? (
                  <div className='flex items-center'>
                    <div className='mr-2'>
                      <svg className='animate-spin h-5 w-5 mr-3' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0120 12h-4a3.999 3.999 0 00-3.392-3.96L8 9.732l1.192 1.192A3.99 3.99 0 0012 16c2.205 0 4-1.794 4-4H4.396a7.963 7.963 0 012.593 5.291z'></path>
                      </svg>
                    </div>
                    <span>Signing up...</span>
                  </div>
                ) : 'Sign Up'
              }
            </button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {
            errorMessage && (
              <div className='mt-5'>
                <p className='text-sm text-red-500'>{errorMessage}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
