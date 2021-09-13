import Inputmask from "inputmask";

export function inputmask () {

  Inputmask(
    {
      mask: "+(375)-(99)-999-99-99",
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: true
    }
  ).mask('#ec-user_contacts-resource-7');

  Inputmask(
    {
      mask: "+(375)-(99)-999-99-99",
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: true
    }
  ).mask('#tel');
  Inputmask(
    {
      mask: "+(375)-(99)-999-99-99",
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: true
    }
  ).mask('#tel1');

};


