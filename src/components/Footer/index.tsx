import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <div>
        <footer id="layout-footer">
      <div className="contact-bar">
  <div className="container container-xs">
    <a href="mailto:info@sanpedrosula.hn">
      <div className="contact-bar-icon">
         <i className="fas fa-envelope"></i>
      </div>
      <span>info@sanpedrosula.hn</span>
    </a>
    <div className="contact-bar-links">
            <a href="https://www.instagram.com/municipalidaddesps/">
        <div className="contact-bar-icon">
         <i className="fab fa-instagram"></i> 
        </div>
      </a>
            <a href="https://www.facebook.com/MunicipalidadDeSanPedroSula">
        <div className="contact-bar-icon">
          <i className="fab fa-facebook-f"></i> 
        </div>
      </a>
            <a href="https://twitter.com/MuniDeSPS">
        <div className="contact-bar-icon">
          <i className="fab fa-twitter"></i>
        </div>
      </a>
            <a href="https://www.youtube.com/channel/UCkAiCLYll4Muh83z4S3KBsw/videos">
        <div className="contact-bar-icon">
          <i className="fab fa-youtube"></i>
        </div>
      </a>
          </div>
    <a href="tel:+504 2552-1588">
      <div className="contact-bar-icon">
        <i className="fas fa-phone"></i>
      </div>
      <span>+504 2552-1588</span>
    </a>
  </div>
</div>

 <div className="footer">
  <div className="container">
    <a href="/" className="footer-logo">
      <img src="https://des.sanpedrosula.hn/themes/msps/assets/images/logos/msps_logo.svg" alt="Logo Municipalidad de San Pedro Sula" />
    </a>
    <div className="footer-links">
            <div className="footer-links-category">
        <a href="" className="h6">Hashtag Facebook</a>
                <a href="https://www.facebook.com/hashtag/OrgulloSanpedrano">#OrgulloSanpedrano</a>
                <a href="https://www.facebook.com/hashtag/SPSUnaCiudadViva">#SPSUnaCiudadViva</a>
                <a href="https://www.facebook.com/hashtag/SPSUnaCiudadQueCrece">#SPSUnaCiudadQueCrece</a>
                <a href="https://www.facebook.com/hashtag/SPSVaCambiando">#SPSVaCambiando</a>
                <a href="https://www.facebook.com/hashtag/YoSoy0501">#YoSoy0501</a>
              </div>
            <div className="footer-links-category">
        <a href="" className="h6">Hashtag Instagram</a>
                <a href="https://www.instagram.com/explore/tags/SPSUnaCiudadViva/">#SPSUnaCiudadViva</a>
                <a href="https://www.instagram.com/explore/tags/SPSUnaCiudadQueCrece/">#SPSUnaCiudadQueCrece</a>
                <a href="https://www.instagram.com/explore/tags/SPSVaCambiando/">#SPSVaCambiando</a>
                <a href="https://www.instagram.com/explore/tags/YoSoy0501/">#YoSoy0501</a>
              </div>
          </div>
  </div>


</div>
    </footer>
    </div>
  )
}

export default Footer;