import React from "react"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
export const Footer = () => {
    return (
        <>
            <div class="container-fluid justify-content-center footerMain" >
            <hr class="mx-0 px-0" />
                <footer>
                    <div class="row justify-content-around mb-0 pt-5 pb-0 ">
                        <div class=" col-11">
                            <div class="row ">
                                <div class=" col-md-3 col-12 my-sm-0 mt-5 "><h3><span></span><b class="text-white"> ENOCH</b></h3>
                                   
                                        
                                    <div class="my-3 border-0 mt-5 ">
                                                <div class="card-body "><h2><b>Subscribe For NewsLetter!</b></h2><p class="pl-0 ml-0 mb-2  text-white">Find out what we can do for your business or home.</p>
                                            <div class="row "><div class="col-auto"><div class="input-group-lg input-group mb-3 "><input type="text" class="form-control" placeholder="Enter your e-mail address" aria-label="Recipient's username" aria-describedby="button-addon2" /><div class="input-group-append"><button class="btn btn-success h-100 d-inline-block" type="button" id="button-addon2"> <b>Submit</b></button></div></div></div></div>
                                                </div>
                                     </div>
                                  

                                </div>
                                <div class="col-md-3 col-12  my-sm-0 mt-5  text-center">
                                    <ul class="list-unstyled text-white">
                                        <li class="mt-md-3 mt-4 text-dark ont-weight-bold"><h3> Our Solution</h3></li>
                                        <li>Intergrated Security Platform</li>
                                        <li>Core Features</li>
                                        <li>Product Features</li>
                                        <li>Pricing</li>
                                    </ul></div>
                                <div class="text-center col-md-3 col-12 my-sm-0 mt-5 text-white">
                                    <ul class="list-unstyled"><li class="mt-md-3 mt-4 text-dark ont-weight-bold" ><h3>About Company</h3></li><li>Intergrated Security Platform</li><li>Core Features</li><li>Product Features</li><li>Pricing</li></ul></div>
                                <div class="text-center text-white col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                                    <ul class="list-unstyled"><li class="mt-md-3 mt-4 text-center text-dark ont-weight-bold" ><h3>Offer</h3></li><li>Intergrated Security Platform</li><li>Core Features</li><li>Product Features</li><li>Pricing</li></ul></div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


        </>
    )
}

