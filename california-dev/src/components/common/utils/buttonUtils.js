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
  return styled(component).attrs((props) => ({
    as: props.href ? "a" : "button",
    href: props.href,
    target: props.href ? "_blank" : undefined,
    rel: props.href ? "noopener noreferrer" : undefined,
  }))``;
}

export { createDynamicButton };
