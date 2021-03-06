import { useState, useEffect } from 'react'
/* import { useTheme, Theme } from 'contexts/ThemeContext' */
import * as S from './styles'
import Cookie from 'js-cookie'
import addDays from 'date-fns/addDays'
import Field from '../../components/Field/Field'
import { Formik, Form } from 'formik'
import * as Schema from '../../utils/schema'
import Logo from '../../img/LogoLogin.png'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 /*  const { theme, setTheme } = useTheme() */
  const initialValues = { email: '', password: '' }
  const navigate = useNavigate()

  /* useEffect(() => {
    setTheme(Theme.Dark)
    
  }, []) */

  const handleSignIn = (values) => {
    const { email, password } = values
    const resultUser = localStorage.getItem('userAuth')
    const usersLogged = resultUser ? JSON.parse(resultUser) : {}
    if (usersLogged.email === email && usersLogged.password === password) {
      Cookie.set('token', 'token-here', {
        expires: addDays(new Date(), 1)
      })
       navigate('/Feed') 
    } else {
      alert('Usuário ou senha digitado incorretamente')
    }
  }

  const createLogin = (values) => {
    const { email, password } = values
    const userLogin = {
      email: email,
      password: password
    }
    localStorage.setItem('userAuth', JSON.stringify(userLogin))
    setIsSiginVisible(true)
  }

  const [isSiginVisible, setIsSiginVisible] = useState(true)

  return (
    <S.Wrapper>
      <S.ContainerLeft>
        {isSiginVisible ? (
          <>
            <S.LogoDisplayColumn src={Logo} />
            <S.ContainerTitle>
              <S.SubTitle>Bem vindo a sua</S.SubTitle>
              <S.SubTitle>Comunidade de Viagens</S.SubTitle>
              <S.Span>Entre com sua conta</S.Span>
            </S.ContainerTitle>
            <Formik
              validationSchema={Schema.SigIn}
              initialValues={initialValues}
              onSubmit={handleSignIn}
            >
              {() => (
                <S.ContainerForm>
                  <Form>
                    <Field name="email" type="email" label="Email" />
                    <Field name="password" type="password" label="Senha" />
                    <S.ContainerRow>
                      <a href="">Esqueceu a senha?</a>
                    </S.ContainerRow>
                    <S.ButtonSingIn type="submit">Login</S.ButtonSingIn>
                  </Form>
                </S.ContainerForm>
              )}
            </Formik>
            <S.ContainerAction>
              <S.ContainerRow style={{ marginTop: '15px' }}>
                <p>Novo no MyTrip?</p>
                <p 
                  onClick={() => {
                    setIsSiginVisible(false)
                  }}
                  style={{
                    color: '#3751fe',
                    marginLeft: '10px',
                    cursor: 'pointer'
                  }}
                >
                  Cadastre-se
                </p>
              </S.ContainerRow>
            </S.ContainerAction>
          </>
        ) : (
          <>
            <S.LogoDisplayColumn src={Logo} />
            <S.ContainerTitle>
              <S.SubTitle>Bem vindo a sua</S.SubTitle>
              <S.SubTitle>Comunidade de Viagens</S.SubTitle>
              <S.Span>Crie sua conta</S.Span>
            </S.ContainerTitle>

            <Formik
              validationSchema={Schema.ValidationRegister}
              initialValues={initialValues}
              onSubmit={createLogin}
            >
              {() => (
                <S.ContainerForm>
                  <Form>
                    <Field name="email" type="email" label="Email" />
                    <Field name="password" type="password" label="Senha" />
                    <Field
                      name="confirmPassword"
                      type="password"
                      label="Confirmar Senha"
                    />

                    <S.ButtonSingIn type="submit">Registrar</S.ButtonSingIn>
                  </Form>
                </S.ContainerForm>
              )}
            </Formik>
          </>
        )}
      </S.ContainerLeft>

      <S.ContainerRight>
        <S.ContainerButton>
          {isSiginVisible ? (
            <>
              <S.ButtonSingUp
                onClick={() => {
                  setIsSiginVisible(false)
                }}
                style={{ marginLeft: '16px' }}
              >
                Registar
              </S.ButtonSingUp>
            </>
          ) : (
            <>
              <S.ButtonSingUp
                onClick={() => {
                  setIsSiginVisible(true)
                }}
                style={{ marginLeft: '16px' }}
              >
                Entrar
              </S.ButtonSingUp>
            </>
          )}
        </S.ContainerButton>
        <S.LogoImage src={Logo} alt="Imagem Logo" />
      </S.ContainerRight>
    </S.Wrapper>
  )
}

export default Login
