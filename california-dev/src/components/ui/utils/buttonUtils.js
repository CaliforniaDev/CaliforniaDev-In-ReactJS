import styled from "styled-components";
/**
 * Applies dynamic attributes to the given component.
 * If the component has an href prop, it should be rendered as an <a> tag,
 * otherwise it should be a <button> tag.
 *
 * @param {React.Component} component - The base component to be styled.
 * @returns {Function} - The styled component function.
 */

function createDynamicButton(component) {
  const DynamicButton = styled(component).attrs((props) => {
    const { href, target, rel} = props;
    return {
      as: href ? "a" : "button",
      href,
      target: href ? target || "_blank" : undefined,
      rel: href ? rel || "noopener noreferrer" : undefined,
    };
  })`
    text-decoration: none;
  `;

  return DynamicButton;
}

export { createDynamicButton };
