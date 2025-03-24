import { PropsWithChildren } from "react";
import { createTheme, MantineProvider as MantineLibProvider, MantineProviderProps } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Toaster } from "sonner";


export default function MantineProvider({ children, root }: PropsWithChildren<{ root: HTMLElement }>) {
	const theme = createTheme({
		fontFamily: "Inter, sans-serif",
		headings: {
			fontFamily: "Inter, sans-serif",
		},
		primaryColor: "indigo",
		primaryShade: 7,
		components: {
			Portal: {
				defaultProps: {
					target: root
				},
			}
		}
	});

	const handleOverlayClick = (event:any) => {
		event.stopPropagation();
	};

	const ProviderOptions: MantineProviderProps = {
		theme,
		defaultColorScheme: "dark",
		withCssVariables: true,
		cssVariablesSelector: ".ext-popup-app",
		getRootElement: () => root
	};

	return (
		<MantineLibProvider {...ProviderOptions}>
			<DatesProvider settings={{ timezone: "UTC" }}>{children}</DatesProvider>
			<div onClick={handleOverlayClick}>
				<Toaster
					position="bottom-center"
					expand 
					toastOptions={{
						className: "w-[100%] absolute left-0 bottom-[40px] px-[50px]",
					}}
				/>
			</div>
		</MantineLibProvider>
	);
}
