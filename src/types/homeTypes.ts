export type BannerProps = {
  image: string;
  header?: string;
  description?: React.ReactNode; // Change the type to ReactNode
  textAlign?: 'left' | 'center' | 'right';
  textColor?: string;
  h_fontSize?: string;
  p_fontSize?: string;
  showButton?: boolean;
  buttonText?: string;
  linkTo?: string; 
  sectionId?: string;
  onClick?: () => void;
};
