import React from "react";
import Container from "react-bootstrap/esm/Container";
import img from "../assets/Pecan Logo 2.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import img1 from "../assets/Pecan Logo 1.svg";
import img2 from "../assets/ndic.png";
import img3 from "../assets/Central_Bank_of_Nigeria_logo (1).png";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import "../App.css";
import { Link } from "react-router-dom";

const Futa = () => {
    return (
        <footer className="site-footer">
            <div class="container-fluid footer-inner">
                <div class="row gy-4">
                    <div class="col-12 col-md-4 col-lg-2">
                        <img src={img1} alt="Pecan" />
                    </div>

                    <div class="col-6 col-md-4 col-lg-2">
                        <h6 class="footer-title">Products</h6>
                        <ul class="footer-links">
                            <li>
                                <a href="#">Personal Accounts</a>
                                <span class="note">(Available in Beta)</span>
                            </li>
                            <li>
                                <a href="#">Business Accounts</a>
                                <span class="note">(coming soon)</span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-4 col-lg-2">
                        <h6 class="footer-title">Features</h6>
                        <ul class="footer-links">
                            <li>
                                 <a href="/debitcard">Debit card</a>
                         
                            </li>
                            <li>
                                <a href="/insure">Insurance</a>
                            </li>
                            <li>
                                <a href="#">Overdraft</a>
                            </li>
                            <li>
                                <a href="/loanajo">Loan</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-4 col-lg-2">
                        <h6 className="footer-title">Company</h6>
                        <ul className="footer-links">
                            <li>
                                {" "}
                                <Link to="/about"> About</Link>{" "}
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Partners</a>
                            </li>
                            <li>
                                <a href="#">Media</a>
                            </li>
                            <li>
                                <a href="#">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-4 col-lg-2">
                        <h6 class="footer-title">Help</h6>
                        <ul class="footer-links">
                            <li>
                                <a href="#">Get in Touch</a>
                            </li>
                            <li>
                                <a href="#">Common Questions</a>
                            </li>
                            <li>
                                <a href="#">Antifraud</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-4 col-lg-2">
                        <h6 class="footer-title">Legal</h6>
                        <ul class="footer-links">
                            <li>
                                <a href="#">Terms of Use</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr class="footer-divider" />

                <div class="row align-items-center gy-3">
                    <div class="col-12 col-lg-9 disclaimer">
                        <p>
                            My Pecan Bank or “Pecan” is a digital bank powered
                            by Pecantrust Microfinance Bank (RC: 1XXXXX), duly
                            licensed by the Central Bank of Nigeria (CBN) and
                            the NDIC.
                        </p>
                        <p>
                            The content on this website does not constitute a
                            complete description of Pecan Bank’s offerings and
                            services. By using this website, you accept our
                            Terms of Use and Privacy Policy.
                        </p>
                        <p>
                            Google Play and the Google Play logo are trademarks
                            of Google LLC. Apple, the Apple logo, and iPhone are
                            trademarks of Apple Inc. registered in the U.S.
                        </p>
                    </div>
                    <div class="col-12 col-lg-3 text-lg-end">
                        <img src={img3} alt="NDIC" />
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>

            <div class="container-fluid footer-inner">
                <div class="row">
                    <div class="col-12 text-center">
                        <p class="copyright">
                            © 2023 Pecan Digital Bank. All rights reserved.
                        </p>
                        <div class="social">
                            <a href="#" aria-label="Instagram">
                                {" "}
                                <FaInstagram /> <i class="bi bi-instagram"></i>
                            </a>
                            <a href="#" aria-label="Facebook">
                                {" "}
                                <RiFacebookLine />{" "}
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="#" aria-label="Twitter">
                                {" "}
                                <FaXTwitter /> <i class="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Futa;
