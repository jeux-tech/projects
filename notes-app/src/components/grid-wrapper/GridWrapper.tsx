import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";

type Props = {
  cols: number;
  children: React.ReactNode[];
};

const ResponsiveGridLayout = WidthProvider(Responsive);

const GridWrapper = ({ cols, children }: Props) => {
  const layout = children.map((_, index) => ({
    i: `item-${index}`,
    x: index % cols,
    y: Math.floor(index / cols),
    w: 1,
    h: 1,
    isResizable: false,
  }));

  const layouts: ReactGridLayout.Layouts = {
    lg: layout,
    md: layout,
    sm: layout,
    xs: layout,
    xss: layout,
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: cols, md: cols, sm: cols, xs: cols, xxs: cols }}
    >
      {children.map((child, index) => (
        <div key={`item-${index}`}>{child}</div>
      ))}
    </ResponsiveGridLayout>
  );
};

export default GridWrapper;
