import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";

const CustomPage: FunctionComponent<{ location: Location }> = ({location}) => (
	  <Layout bigHeader={false}>
	    <SEO
	      location={location}
	      title={`Page title`}
	    />
	    <div>
	      Your content    
	    </div>
	</Layout>
);

export default CustomPage;
