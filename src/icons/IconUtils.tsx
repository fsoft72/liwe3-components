export interface IconProps {
	w?: number;
	h?: number;
}

export const mkIcon = ( svg: any, props: IconProps ) => {
	const { w = 24, h = 24 } = props;

	return <div style={{ width: `${ w }px`, height: `${ h }px`, display: "inline-block" }}> {svg} </div>;
};