import {
  AbstractElement,
  IconDefinition,
  IconParams,
  icon,
} from "@fortawesome/fontawesome-svg-core";

function abstractToDreamland(element: AbstractElement): HTMLElement {
  return h(
    element.tag,
    element.attributes,
    ...(element.children || []).map(abstractToDreamland),
  ) as HTMLElement;
}

const FontAwesomeIcon: Component<
  {
    icon: IconDefinition;
  } & IconParams,
  EmptyArgs
> = function () {
  return abstractToDreamland(
    icon(this.icon, this).abstract[0],
  ) as DLElement<any>;
};

export default FontAwesomeIcon;
