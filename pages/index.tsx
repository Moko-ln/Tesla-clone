import Section from "../components/Section";
const HomePage = ( { data }: any ) => {

  return (
    <>
      {
        data.map((item: any, index: number) => 
          <Section key={index+1} data={item} />
        )
      }    
    </>
  )
  
}

export default HomePage;

export async function getStaticProps() {

  const res = await fetch('https://tesla-clone-pxvuyhs42-moko-ln.vercel.app/api/datacar');
  
  const { data } = await res.json();

  return {
    props: {
      data
    }
  }
}