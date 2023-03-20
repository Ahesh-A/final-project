// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid
// } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./myaccount.styles.scss";
import Candles from "../../components/candles/candles.component.jsx";
import { useState, useEffect } from "react";
import { selectFavourites } from "../../store/favourites/favourites.selector";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { updateUser } from "../../utils/firebase.utils";
const MyAccount = () => {
  // const info = {
  //   ...user,
  //   country: "",
  //   state: "",
  //   address_line1: "",
  //   address_line2: "",
  //   postal_code: "",
  //   occupation: "",
  // };
  const favourites = useSelector(selectFavourites);
  const user = useSelector(selectCurrentUser);
  const [userInfo, setUserInfo] = useState({});

  const accountSubmitHandler = (e) => {
    e.preventDefault();
    const { uid } = userInfo;
    updateUser(uid, userInfo);
  };
  useEffect(() => {
    
    if (user) setUserInfo(user);
  }, [userInfo, user]);
  return (
    <div>
      <div className="my-account-container">
        <h3 className="my-account-title">
          <span> My Account</span>
          <div className="seperoator"></div>
        </h3>
        <form
          action="submit"
          onSubmit={accountSubmitHandler}
          className="account-forms"
          value={userInfo}
        >
          <div className="account-forms-container">
            <div className="left-account-forms-container">
              <div className="account-forms-left-container">
                <div className="account-form">
                  <label htmlFor="First-Name">
                    First Name <span>*</span>
                  </label>
                  <input
                    name="first_name"
                    type="text"
                    id="First-Name"
                    value={userInfo.first_name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, first_name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="account-form">
                  <label htmlFor="Email-Address">
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="Email-Address"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="account-form">
                  <label htmlFor="country">
                    Country <span>*</span>
                  </label>
                  <select
                    name="country"
                    id="country"
                    value={userInfo.country}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, country: e.target.value })
                    }
                  >
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="VG">British Virgin Islands</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>n
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos [Keeling] Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo - Brazzaville</option>
                    <option value="CD">Congo - Kinshasa</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d’Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">
                      Heard Island and McDonald Islands
                    </option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong SAR China</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macau SAR China</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar [Burma]</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="KP">North Korea</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territories</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn Islands</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">São Tomé and Príncipe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia</option>
                    <option value="KR">South Korea</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="US" defaultValue="selected">
                      United Kingdom
                    </option>
                    <option value="UY">Uruguay</option>
                    <option value="UM">U.S. Minor Outlying Islands</option>
                    <option value="VI">U.S. Virgin Islands</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican City</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
                <div className="account-form">
                  <label htmlFor="Address-Line1">
                    Address Line 1 <span>*</span>
                  </label>
                  <input
                    type="text"
                    name="address_line1"
                    id="Address-Line1"
                    value={userInfo.address_line1}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        address_line1: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="account-form">
                  <label htmlFor="Postal-Code">
                    Postal Code <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="Postal-Code"
                    name="postal_code"
                    value={userInfo.postal_code}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        postal_code: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="account-forms-right-container">
                <div className="account-form">
                  <label htmlFor="Last-Name">
                    Last Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="Last-Name"
                    name="last_name"
                    value={userInfo.last_name}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        last_name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="account-form">
                  <label htmlFor="Phone-Number">
                    Phone Number<span>*</span>
                  </label>
                  <input
                    type="number"
                    id="Phone-Number"
                    name="phone_number"
                    value={userInfo.phone_number}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        phone_number: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="account-form">
                  <label htmlFor="State/Divition">
                    State / Divition <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="State/Divition"
                    name="state"
                    value={userInfo.state}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        state: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="account-form">
                  <label htmlFor="Address-Line2">Address Line 2</label>
                  <input
                    type="text"
                    id="Address-Line2"
                    name="address_line2"
                    value={userInfo.address_line2}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        address_line2: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="account-form">
                  <label htmlFor="Occupation">
                    Occupation <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="Occupation"
                    name="occupation"
                    value={userInfo.occupation}
                    onChange={(e) =>
                      setUserInfo({
                        ...userInfo,
                        occupation: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="account-sumbit-button-container">
                <button type="submit" className="account-sumbit-button">
                  Submit
                </button>
              </div>
            </div>
            <div className="right-accounts-form-container">
              <Candles />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
