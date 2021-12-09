import * as S from './style'
import ProfileImg from '../ProfileImg/ProfileImg'

const SideBar = () => {

  return (
    <S.ContainerSideBar>
      <S.BoxInfoPerfil>
        <S.BackgroundPerfil src="img/retangulo.png" />
        <S.PerfilImg src="img/profile.jpg" />
        <h2>Henrique Nobre</h2>
      </S.BoxInfoPerfil>
      <S.BoxInfoRigth>
        <S.ButtonNewTravel onClick={console.log('nova viagem')}>
          Nova viagem
        </S.ButtonNewTravel>
      </S.BoxInfoRigth>
      <S.BoxInfoRigth>
        <h2>Principais Viagens</h2>
        <S.BoxInfoRow>
          <img src="img/cachoeira.png" alt="" />
          <p>Estrada Real</p>
        </S.BoxInfoRow>
        <S.BoxInfoRow>
          <img src="img/cachoeira.png" alt="" />
          <p>Estrada Real</p>
        </S.BoxInfoRow>
        <S.BoxInfoRow>
          <img src="img/cachoeira.png" alt="" />
          <p>Estrada Real</p>
        </S.BoxInfoRow>
      </S.BoxInfoRigth>
      <S.BoxInfoRigth>
        <h2>Cidades Visitadas</h2>
        <h3>Ouro Preto-MG</h3>
        <h3>Mariana-MG</h3>
        <h3>Conselheiro Mata-MG</h3>
        <h3>Conceição-MG</h3>
        <h3>Belo Horizonte-MG</h3>
      </S.BoxInfoRigth>
      <S.BoxInfoRigth>
        <h2 style={{ marginBottom: '20px' }}>Amigos</h2>
        <ProfileImg />
        <ProfileImg />
        <ProfileImg />
      </S.BoxInfoRigth>
    </S.ContainerSideBar>
  )
}

export default SideBar
