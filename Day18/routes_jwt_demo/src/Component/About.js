import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core';

function About() {
    return ( <>
          
          <h1>This is the About!  </h1>

          <div class="container">
            <div class="row">
                <div class="col-md-4 mx-auto">

                    <div id="accordion">

                        <div class="card">
                            <div class="card-header" data-toggle="collapse" data-target="#card1">Vision</div>
                            <div class="collapse" id="card1" data-parent="#accordion">
                                <div class="card-body">This is the Vision of the organization</div>
                            </div>
                        </div>

                      

                        <div class="card">
                            <div class="card-header" data-target="#card2" data-toggle="collapse">Mision</div>
                            <div class="collapse" id="card2" data-parent="#accordion">
                                <div class="card-body">This is the Mision of the organization</div>
                            </div>
                        </div>

                   

                        <div class="card">
                            <div class="card-header" data-target="#card3" data-toggle="collapse">Goals</div>
                            <div class="collapse" id="card3" data-parent="#accordion">
                                <div class="card-body">This is the Goals of the organization</div>
                            </div>
                        </div>

                       

                    </div>
                </div>
            </div>
        </div>
         
     
    </>);
}

export default About;