import './App.css'
import { Route, Routes } from 'react-router-dom'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import PasswordResetSuccess from './pages/auth/PasswordResetSuccess'
import PasswordReset from './pages/auth/PasswordReset'
import SetNewPassword from './pages/auth/SetNewPassword'
import LoginPage from './pages/auth/LoginPage'
import ClientLayout from './layout/ClientLayout'
import AuthLayout from './layout/AuthLayout'
import Dashboard from './pages/Dashboard'
import MySubjects from './pages/MySubjects'
import MyClasses from './pages/MyClasses'
import Exams from './pages/Exams'
import MyStudents from './pages/MyStudents'
import Assignments from './pages/Assignments'
import Quiz from './pages/Quiz'
import Examinations from './pages/Examinations'




function App() {
  return (
    <Routes>
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='login-page' element={<LoginPage />} />
        <Route path='forgot-password' element={<ForgotPasswordPage />} />
        <Route path='password-reset' element={<PasswordReset />} />
        <Route path='set-new-password' element={<SetNewPassword />} />
        <Route path='password-reset-success' element={<PasswordResetSuccess />} />
      </Route>

      <Route element={<ClientLayout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/my-subjects' element={<MySubjects />} />
        <Route path='/my-classes' element={<MyClasses />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/my-students' element={<MyStudents />} />
        <Route path='/assignment' element={<Assignments />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/examination' element={<Examinations />} />
      </Route>
    </Routes>
  )
}

export default App
