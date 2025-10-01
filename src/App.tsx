import Container from "./components/container";
import SideBar from "./core-components/aside";
import Header from "./core-components/header";

export default function App() {
  return (
    <Container as="div" className="bg-gray-100 flex flex-col md:flex-row min-h-screen">
        <SideBar className="px-4">
          <Header className="py-6 px-5 hidden md:flex"/>
          <div className=""></div>
        </SideBar>

        <main className="flex-1">
          <Header className="flex md:hidden"/>
        </main>
    </Container>
  )
}


