import { StartConfigService } from "./start-config.service";

export function appInitializer(startConfig: StartConfigService) {
 return () => {
   return startConfig.loadAppConfig();
 };
}
