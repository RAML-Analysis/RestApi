package validators;

import org.json.simple.JSONObject;
import org.testng.Assert;

import io.restassured.path.json.JsonPath;

public class Validator {
	public static void validateResponse(JSONObject user, JsonPath jp)
	{
		Assert.assertEquals(user.get("id"), jp.getLong("id"));
		Assert.assertEquals(user.get("firstName"), jp.get("firstName"));
		Assert.assertEquals(user.get("email"), jp.get("email"));
		Assert.assertEquals(user.get("phone"), jp.get("phone"));
		Assert.assertEquals(user.get("userStatus"), jp.getLong("userStatus"));
	}
}
