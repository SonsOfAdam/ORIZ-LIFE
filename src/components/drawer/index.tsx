import { PropsWithChildren } from "react";
import { Drawer } from "antd";

const DrawerComponent: React.FC<
  PropsWithChildren<{ open: boolean; width?: string | number; rootClassName?: string; onClose: () => void }>
> = ({ children, open, width, rootClassName, onClose }) => {
  // const [open, setOpen] = useState(false);

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Drawer title="Basic Drawer" placement="left" width={width} onClose={onClose} open={open} className={rootClassName}>
        {children}
      </Drawer>
    </>
  );
};

export default DrawerComponent;
