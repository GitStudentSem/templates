const pluginsNames = {
	heal: "heal",
	mattifier: "mattifier",
	dodgeBurn: "dodgeBurn",
	portraitVolumes: "portraitVolumes",
	skinTone: "skinTone",
	eyeVessels: "eyeVessels",
	eyeBrilliance: "eyeBrilliance",
	dust: "dust",
	whiteTeeth: "whiteTeeth",
	skinMask: "skinMask",
	fabric: "fabric",
	cleanBackdrop: "cleanBackdrop",
};

interface Brightness {
	controlType: "slider";
	value: number;
	maximum: number;
	minimum: 0;
	id: "$SenF";
	title: "Brightness";
}
interface Whitness {
	controlType: "slider";
	value: number;
	maximum: number;
	minimum: 0;
	id: "$SSdF";
	title: "Whiteness";
}
type Sliders = Brightness | Whitness;

const brightness: Brightness = {
	controlType: "slider",
	value: 100,
	maximum: 100,
	minimum: 0,
	id: "$SenF",
	title: "Brightness",
};

const whitness: Whitness = {
	controlType: "slider",
	value: 0,
	maximum: 100,
	minimum: 0,
	id: "$SSdF",
	title: "Whiteness",
};

type PortaintScale = {
	controlType: "select";
	noAutoMode: false;
	value: 0 | 1 | 2 | 3;
	id: "$IsHB";
	title: "Portrait scale";
};

type DirtSize = {
	controlType: "select";
	noAutoMode: true;
	value: 1 | 2 | 3;
	id: "$IsHB";
	title: "Dirt size";
};
type Select = {
	controlType: "select";
	noAutoMode: true;
	value: 0 | 1 | 2 | 3;
	id: "$SkTP";
	title: "Select";
};
type Selects = PortaintScale | DirtSize | Select;

const portaintScale: PortaintScale = {
	controlType: "select",
	noAutoMode: false,
	value: 0,
	id: "$IsHB",
	title: "Portrait scale",
};

const dirtSize: DirtSize = {
	controlType: "select",
	noAutoMode: true,
	value: 3,
	id: "$IsHB",
	title: "Dirt size",
};

const select: Select = {
	controlType: "select",
	noAutoMode: true,
	value: 2,
	id: "$SkTP",
	title: "Select",
};

type Automask = {
	controlType: "checkbox";
	value: boolean;
	id: "$IsAM";
	title: "Automask";
};

const automask: Automask = {
	controlType: "checkbox",
	value: true,
	id: "$IsAM",
	title: "Automask",
};

type Schema = Sliders | Selects | Automask;
type PluginType = {
	dataName: string;
	interfaceName: string;
	checked: boolean;
	schema: Schema[];
};
const defaultPlugins: PluginType[] = [
	{
		dataName: pluginsNames.heal,
		interfaceName: pluginsNames.heal,
		checked: false,
		schema: [brightness, portaintScale],
	},
	{
		dataName: pluginsNames.mattifier,
		interfaceName: pluginsNames.mattifier,
		checked: false,
		schema: [
			{
				...brightness,
				value: 0,
			},
			portaintScale,
		],
	},
	{
		dataName: pluginsNames.dodgeBurn,
		interfaceName: pluginsNames.dodgeBurn,
		checked: false,
		schema: [
			{
				...brightness,
				value: 200,
				maximum: 200,
			},
			whitness,
			portaintScale,
		],
	},
	{
		dataName: pluginsNames.portraitVolumes,
		interfaceName: pluginsNames.portraitVolumes,
		checked: false,
		schema: [
			{
				...brightness,
				value: 200,
				maximum: 200,
			},
			portaintScale,
		],
	},
	{
		dataName: pluginsNames.skinTone,
		interfaceName: pluginsNames.skinTone,
		checked: false,
		schema: [
			{
				...brightness,
				value: 200,
				maximum: 200,
			},
			portaintScale,
		],
	},
	{
		dataName: pluginsNames.eyeVessels,
		interfaceName: pluginsNames.eyeVessels,
		checked: false,
		schema: [brightness, portaintScale],
	},
	{
		dataName: pluginsNames.eyeBrilliance,
		interfaceName: pluginsNames.eyeBrilliance,
		checked: false,
		schema: [{ ...brightness, value: 200, maximum: 200 }, portaintScale],
	},
	{
		dataName: pluginsNames.dust,
		interfaceName: pluginsNames.dust,
		checked: false,
		schema: [brightness, dirtSize],
	},
	{
		dataName: pluginsNames.whiteTeeth,
		interfaceName: pluginsNames.whiteTeeth,
		checked: false,
		schema: [
			{ ...brightness, value: 30 },
			{ ...whitness, value: 30 },
			portaintScale,
		],
	},
	{
		dataName: pluginsNames.skinMask,
		interfaceName: pluginsNames.skinMask,
		checked: false,
		schema: [
			{
				...brightness,
				value: 200,
				maximum: 200,
			},
			select,
			portaintScale,
		],
	},
	{
		dataName: pluginsNames.fabric,
		interfaceName: pluginsNames.fabric,
		checked: false,
		schema: [
			{
				...brightness,
				value: 200,
				maximum: 200,
			},
			portaintScale,
		],
	},
	{
		dataName: pluginsNames.cleanBackdrop,
		interfaceName: pluginsNames.cleanBackdrop,
		checked: false,
		schema: [automask, brightness, dirtSize],
	},
];

function getPlugin(pluginName: string) {
	const plugin = defaultPlugins.find(
		(plugin) => plugin.dataName === pluginName,
	);
	if (!plugin) throw new Error("Плагин не существует");
	return plugin;
}

function getPluginSettings(pluginName: string) {
	const plugin = getPlugin(pluginName);

	for (const control of plugin.schema) {
		const controlType = control.controlType;
		if (controlType === "checkbox") {
			control.id === "$IsAM";
		}

		if (controlType === "slider") {
			control.id === "$SSdF";
		}

		if (controlType === "select") {
			control.id === "$IsHB";
		}
	}
}
