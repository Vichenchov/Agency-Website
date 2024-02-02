import MainTitle from "../Components/MainTitle/MainTtitle";

function Profile() {
  const titleRows = ["Hey 👋🏼 I'm Max"];

  window.scrollTo(0, 0);

  return <MainTitle titleRows={titleRows} />;
}

export default Profile;
