package config;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

public class ConfigProvider {
	private static Config config;
	private static Config envConfig;
	
	public static Config config() {
		if(ConfigProvider.config == null) {
			ConfigProvider.config = ConfigFactory.load();
			ConfigProvider.envConfig = ConfigFactory.load().getConfig(System.getProperty("env"));
		}
		return ConfigProvider.envConfig.withFallback(ConfigProvider.config);
	}
	
	
}
