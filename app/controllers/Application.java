package controllers;

import com.google.gson.GsonBuilder;
import models.FavoriteList;
import play.mvc.*;
import util.RelationExclusions;

import java.util.List;


public class Application extends Controller {

    public static void index() {
        List<FavoriteList> lists = FavoriteList.findAll();
        renderArgs.put("lists", new GsonBuilder().setExclusionStrategies(new RelationExclusions()).create().toJson(lists));
        render();
    }

}