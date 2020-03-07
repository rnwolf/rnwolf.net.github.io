import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Subheader from "@nehalist/gatsby-theme-nehalem/src/components/subheader";

const CustomPage: FunctionComponent<{ location: Location }> = ({location}) => (
	  <Layout bigHeader={false}>
	    <SEO
	      location={location}
	      title={`Page title`}
	    />
    	  <Subheader title={`Page title`} subtitle={`Something else`} />
	    <div>
	      Your content    
	    </div>
	</Layout>
);

export default CustomPage;
