package utils;

import java.io.FileReader;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
public class FileManager {
	public static JSONObject validPayload() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\testdata\\validpayload.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);;
		return obj;
	}
	
	public static JSONObject missingID() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\testdata\\missingid.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);;
		return obj;
	}
	
	public static JSONObject missingTitle() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\testdata\\missingtitle.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);;
		return obj;
	}
	
	public static JSONObject missingDueDate() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\testdata\\missingduedate.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);;
		return obj;
	}
	
	public static JSONObject missingCompleted() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\testdata\\missingcompleted.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);;
		return obj;
	}
	
	public static JSONObject boolForID() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\testdata\\boolforid.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);;
		return obj;
	}
	
	public static JSONObject intForTitle() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\testdata\\intfortitle.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);;
		return obj;
	}
	public static JSONObject intForDuedate() throws Exception
	{
		JSONParser jsonparser=new JSONParser();
		FileReader reader=new FileReader(".\\src\\test\\resources\\testdata\\intforduedate.json");
		JSONObject obj=(JSONObject)jsonparser.parse(reader);;
		return obj;
	}
}
