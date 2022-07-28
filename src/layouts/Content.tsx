const Content = ({ children }: Props) => {
	return <div className="content">{children}</div>;
};

interface Props {
	children: React.ReactNode;
}

export default Content;
