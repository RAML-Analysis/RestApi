package validators;

import org.json.simple.JSONObject;
import org.testng.Assert;

import io.restassured.path.json.JsonPath;

public class ResponseValidator 
{
	public static void validateResult(JSONObject user1, JsonPath jo)
	{
		Assert.assertEquals(user1.get("id"),jo.getLong("id"));
		Assert.assertEquals(user1.get("employee_name"),jo.get("employee_name"));
		Assert.assertEquals(user1.get("employee_salary"),jo.getLong("employee_salary"));
		Assert.assertEquals(user1.get("employee_age"),jo.getLong("employee_age"));
		Assert.assertEquals(user1.get("profile_image"),jo.getLong("profile_image"));
	}
}
