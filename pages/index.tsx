import Article from "../components/Article";

const HomePage = ( { data }: any ) => {

  return (
    <div className="overflow-x-hidden snap-y snap-mandatory h-screen w-screen" >
      {
        data.map((item: any, index: number) => 
          <Article key={index+1} data={item} />
        )
      }    
    </div>
  )
}

export default HomePage;

export async function getStaticProps() {

  const res = await fetch('https://tesla-clone-hxl74yw32-moko-ln.vercel.app/api/datacar');
  
  const { data } = await res.json();

  return {
    props: {
      data
    }
  }
}