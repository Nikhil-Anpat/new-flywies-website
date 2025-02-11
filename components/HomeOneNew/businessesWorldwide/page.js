import PartnerSlider from "../../Common/PartnerSlider"

export default function BusinessesWorldwide () {



    return(
        <div className="pb-50">
        <section className="business-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="business-content">
                  <span className="justify-content-center" style={{ display:'flex',width:'100%',fontSize:'25px',textAlign: "center",fontWeight:'700' }}>Chosen by <span style={{color:'#53AE43'}}>Leading  Businesses </span> Worldwide</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <PartnerSlider />
      </div>

    )
}