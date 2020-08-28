import React, {FunctionComponent} from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Subheader from "@nehalist/gatsby-theme-nehalem/src/components/subheader";
import {Container} from "@nehalist/gatsby-theme-nehalem/src/components/common";

const MyNewsLetterPage: FunctionComponent<{ location: Location }> = ({location}) => (
	  <Layout bigHeader={false}>
	    <SEO
	      location={location}
	      title={`Sign-up for an occasional newsletter.`}
	    />
    	  <Subheader title={`Newsletter sign-up`} subtitle={``} />
	    <Container>
			<p>I'll send out a newsletter containing interesting updates every now and then.</p>
			<p> Sign-up here.</p>
			<form method="post" action="https://sendfox.com/form/mn6lnq/3644xo" class="sendfox-form" id="3644xo" data-async="true" data-recaptcha="true">
				<label >First Name</label>
				<p><input type="text" placeholder="First Name" name="first_name" required /></p>
				<label >Last Name</label>
				<p><input type="text" placeholder="Last Name" name="last_name" required /></p>
  				<label >Email</label>
				<p><input type="email" placeholder="Email" name="email" required /></p>
				<p><label><input type="checkbox" name="gdpr" value="1" required /> I agree to receive email updates and promotions.</label></p>
				<div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
					<input type="text" name="a_password" tabindex="-1" value="" autocomplete="off" />
				</div>
				<button type="submit">Submit</button>
			</form>
			<script src="https://sendfox.com/js/form.js"></script>
	    </Container>
	</Layout>
);

export default MyNewsLetterPage;
