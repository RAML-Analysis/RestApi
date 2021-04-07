package validators;

import org.json.simple.JSONObject;
import org.testng.Assert;

import io.restassured.path.json.JsonPath;

public class Validator {
	public static void validate(JSONObject json, JsonPath jpath)
	{
		Assert.assertEquals(json.get("id"),jpath.getLong("id"));
		Assert.assertEquals(json.get("title"),jpath.get("title"));
		Assert.assertEquals(json.get("dueDate"),jpath.get("dueDate"));
		Assert.assertEquals(json.get("completed"),jpath.get("completed"));
	}
}
