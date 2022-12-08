import { Routes, Route} from 'react-router-dom'
import {publicRouter} from './routers/index.js'
import { formatURL } from './assets/index.js';
import { useSelector } from "react-redux/es/exports";
import DefaultLayout from './layouts/DefaultLayout/index.js';
import InformationProductPage from "./page/InformationProductPage";
import CategoryPage from './page/CategoryPage/index.js';

function App() {
  const mainInforPage=useSelector(state=>state.informationProductPage)
  const mainCategoryPage=useSelector(state=>state.categoryProducts)
  const codeInforPage=formatURL(mainInforPage.code)
  const stringInforPage=formatURL(mainInforPage.name_product)
  const idCategory=formatURL(mainCategoryPage.class.id_class)
  const nameCategory=formatURL(mainCategoryPage.class.name)

  return (
    
    <div>
        <Routes>
          {publicRouter.map((item,index)=>{
            const Element=item.component || <></>
            const Layout=item.layout ||<></>
            return <Route key={index} path={item.path} element={
              <Layout>
                <Element/>
              </Layout>
            }/>
          })}
        </Routes>
        <Routes>
          <Route path={`${stringInforPage}-${codeInforPage}`} element={
            <DefaultLayout>
              <InformationProductPage/>
            </DefaultLayout>
          }/>
          <Route path={`${nameCategory}-${idCategory}`} element={
            <DefaultLayout>
              <CategoryPage/>
            </DefaultLayout>
          }/>
        </Routes>
      
    </div>
  );
}

export default App;
