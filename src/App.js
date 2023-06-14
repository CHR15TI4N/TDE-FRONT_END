import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Box from './components/Box';
import Numbers from './components/Numbers';
import Input from './components/Input';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <body>
        <UserInfo
          name={"Christian"}
          birthday={"30/04/2004"}
          email={"teste@email.com"}
        />
        <UserInfo
          color={"#366"}
          name={"Christian2"}
          birthday={"29/04/2004"}
          email={"teste2@email.com"}
        />
        <UserInfo
          color={"#e24"}
          name={"Christian3"}
          birthday={"28/04/2004"}
          email={"teste3@email.com"}
        />
        <Numbers fontColor={"#fff"}/>
        <Input/>
      </body>
    </div>
  );
}

export default App;
