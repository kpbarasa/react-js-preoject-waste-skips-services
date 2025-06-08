import PageTitle from "./title";
import PageContent from "./content";
import BackToTopButton from "./back-to-top-btn";

export default function PageComponent(props) {
  return (
    <div>
      
      <PageTitle title="Choose Your Skip Size" subtitle="Select the skip size that best suits your needs" />
      
      <PageContent>
        
        {props.children}
        
        <BackToTopButton />

      </PageContent>
    
    </div>
  );
}